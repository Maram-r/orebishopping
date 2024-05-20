import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { useLocation, Link} from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductInfo = ({ productInfo }) => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const [clientName, setclientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // ========== Error Messages Start here ============
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  // ========== Error Messages End here ==============
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setclientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handlePost = async (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your Name");
    }
    if (!email) {
      setErrEmail("Enter your Email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid Email");
      }
    }
    if (!messages) {
      setErrMessages("Enter your Messages");
    }
    if (clientName && email && EmailValidation(email) && messages) {
      try {
        const response = await fetch('http://localhost:5000/contracts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: clientName,
            email: email,
            description: messages,
            startDate: startDate,
            endDate: endDate,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setSuccessMsg(
            `Thank you dear ${clientName}, Your Contract have been received successfully..`
          );
        } else {
          const errorData = await response.json();
          console.error(errorData.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const [selectedOption, setSelectedOption] = useState("option1");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const highlightStyle = {
    color: "#d0121a", 
    fontWeight: "bold", 
  };

  const renderDescription = () => {
    if (!productInfo.des) {
      return null; 
    }

    const description = productInfo.des.split(/:(.*?)-/).map((part, index) => {
      return (
        <span key={index} style={index % 2 === 1 ? highlightStyle : {}}>
          {part}
        </span>
      );
    });

    return <>{description}</>;
  };

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-2xl font-semibold">
        {productInfo.price} Dt
        <span className="text-xl font-semibold line-through ml-2">1640</span>
        
      </p>
      <hr />
      <p className="text-base text-gray-600">{renderDescription()}</p>

      
        
    
      <hr />

      <div className="pt-4 flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  _id: productInfo._id,
                  productName: productInfo.productName,
                  price: productInfo.price,
                  brand: productInfo.brand,
                  image: productInfo.image,
                })
              )
            }
            className="bg-black text-white py-3 px-6 active:bg-gray-800"
          >
            Add to Cart
          </button>
          
        </div>
        <hr />
        <form className="flex flex-col gap-3" onSubmit={handlePost}>
          {successMsg && (
            <div className="bg-green-500 text-white p-2 rounded">
              {successMsg}
            </div>
          )}
          <label>
			<p className="text-base font-titleFont font-semibold px-2">
                Select an option
      </p>
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="Contract 1">Contract 1</option>
				<option  value="Contract 2">Contract 2</option>
				<option  value="Contract 3">Contract 3</option>
			</select>
		</label>

          <input
            className="border border-gray-300 p-2 rounded"
            type="text"
            placeholder="Your Name"
            value={clientName}
            onChange={handleName}
          />
          {errClientName && (
            <div className="text-red-500 text-sm">{errClientName}</div>
          )}
          <input
            className="border border-gray-300 p-2 rounded"
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={handleEmail}
          />
          {errEmail && <div className="text-red-500 text-sm">{errEmail}</div>}
          <textarea
            className="border border-gray-300 p-2 rounded"
            placeholder="Your Messages"
            value={messages}
            onChange={handleMessages}
            rows="4"
          />
          {errMessages && (
            <div className="text-red-500 text-sm">{errMessages}</div>
          )}
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <DatePicker
              id="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="endDate">End Date:</label>
            <DatePicker
              id="endDate"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <button
            className="bg-black text-white py-3 px-6 active:bg-gray-800"
            type="submit"
          >
            Submit
          </button>
        </form>
        <Link to="/contrats" className="mt-4 text-blue-500">
          View Contracts
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
