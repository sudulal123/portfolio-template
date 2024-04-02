"use client";

import { motion,useTransform } from "framer-motion";

const BigGuy = ({scrollYProgress}) => {	
  return (
	<div className="w-full h-full">
		<div className="w-full h-1/2">
			<svg width="100%" height="100%">
        		<g className="p-right">
					<g 
						id="Note"
						stroke="currentColor"
						transform="translate(175 75)" 
					>
						<g 
							id="Note01"
							fill="green"
							transform="matrix(.3276 0 0 -.3276 166.3 22.408)"
						>
						<motion.path
							animate={{y:[0, 23, 0]}}
							transition={{duration:1, repeat: Infinity,}}
							id="path2362" 
							d="m5.433 25.838l-8.633-46.488 0.473-0.088 8.632 46.488-0.472 0.088z"
						/>
						<motion.path 
							animate={{y:[0, 23, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2360" 
							d="m-10.456-15.02c-3.922-0.477-6.807-3.283-6.443-6.271 0.361-2.986 3.834-5.023 7.756-4.547 3.92 0.476 6.805 3.283 6.441 6.27-0.361 2.988-3.834 5.023-7.754 4.548z"/>
						<motion.path 
							animate={{y:[0, 23, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2364" 
							d="m5.696 25.798l-2.144-10.929c-0.32-1.721 8.342-7.983 9.102-12.135 0.754-4.105 2.309-8.826 1.949-11.086-0.787-4.941-4.344-10.785-7.129-11.93 1.592 0.654 7.646 4.684 9.426 14.268 1.049 5.652-2.777 16.158-6.67 20.176-3.631 3.748-4.534 11.636-4.534 11.636z"/>
						</g>
						<g 
							id="Note02"
							fill="blue"
							transform="matrix(.3276 0 0 -.3276 160.57 27.008)"
						>
						<motion.path 
							animate={{y:[0, 22, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2362" 
							d="m5.433 25.838l-8.633-46.488 0.473-0.088 8.632 46.488-0.472 0.088z"/>
						<motion.path 
							animate={{y:[0, 22, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2360" 
							d="m-10.456-15.02c-3.922-0.477-6.807-3.283-6.443-6.271 0.361-2.986 3.834-5.023 7.756-4.547 3.92 0.476 6.805 3.283 6.441 6.27-0.361 2.988-3.834 5.023-7.754 4.548z"/>
						<motion.path 
							animate={{y:[0, 22, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2364" 
							d="m5.696 25.798l-2.144-10.929c-0.32-1.721 8.342-7.983 9.102-12.135 0.754-4.105 2.309-8.826 1.949-11.086-0.787-4.941-4.344-10.785-7.129-11.93 1.592 0.654 7.646 4.684 9.426 14.268 1.049 5.652-2.777 16.158-6.67 20.176-3.631 3.748-4.534 11.636-4.534 11.636z"/>
						</g>
						<g 
							id="Note03"
							fill="yellow" 
							transform="matrix(.3276 0 0 -.3276 156.55 15.273)"
						>
						<motion.path 
							animate={{y:[0, 20, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2362" 
							d="m5.433 25.838l-8.633-46.488 0.473-0.088 8.632 46.488-0.472 0.088z"/>
						<motion.path 
							animate={{y:[0, 20, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2360" 
							d="m-10.456-15.02c-3.922-0.477-6.807-3.283-6.443-6.271 0.361-2.986 3.834-5.023 7.756-4.547 3.92 0.476 6.805 3.283 6.441 6.27-0.361 2.988-3.834 5.023-7.754 4.548z"/>
						<motion.path 
							animate={{y:[0, 20, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2364" 
							d="m5.696 25.798l-2.144-10.929c-0.32-1.721 8.342-7.983 9.102-12.135 0.754-4.105 2.309-8.826 1.949-11.086-0.787-4.941-4.344-10.785-7.129-11.93 1.592 0.654 7.646 4.684 9.426 14.268 1.049 5.652-2.777 16.158-6.67 20.176-3.631 3.748-4.534 11.636-4.534 11.636z"/>
						</g>
						<g 
							id="Note04"
							fill="red"
							transform="matrix(.3276 0 0 -.3276 140.46 8.4644)"
						>
						<motion.path 
							animate={{y:[0, 20, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2362" 
							d="m5.433 25.838l-8.633-46.488 0.473-0.088 8.632 46.488-0.472 0.088z"/>
						<motion.path 
							animate={{y:[0, 20, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2360" 
							d="m-10.456-15.02c-3.922-0.477-6.807-3.283-6.443-6.271 0.361-2.986 3.834-5.023 7.756-4.547 3.92 0.476 6.805 3.283 6.441 6.27-0.361 2.988-3.834 5.023-7.754 4.548z"/>
						<motion.path 
							animate={{y:[0, 20, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2364" 
							d="m5.696 25.798l-2.144-10.929c-0.32-1.721 8.342-7.983 9.102-12.135 0.754-4.105 2.309-8.826 1.949-11.086-0.787-4.941-4.344-10.785-7.129-11.93 1.592 0.654 7.646 4.684 9.426 14.268 1.049 5.652-2.777 16.158-6.67 20.176-3.631 3.748-4.534 11.636-4.534 11.636z"/>
						</g>
						<g 
							id="Note05"
							fill="green"
							transform="matrix(.3826 0 0 -.3826 187.27 55.925)"
						>
						<motion.path 
							animate={{y:[0, 20, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2362" 
							d="m5.433 25.838l-8.633-46.488 0.473-0.088 8.632 46.488-0.472 0.088z"/>
						<motion.path 
							animate={{y:[0, 20, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2360" 
							d="m-10.456-15.02c-3.922-0.477-6.807-3.283-6.443-6.271 0.361-2.986 3.834-5.023 7.756-4.547 3.92 0.476 6.805 3.283 6.441 6.27-0.361 2.988-3.834 5.023-7.754 4.548z"/>
						<motion.path 
							animate={{y:[0, 20, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2364" 
							d="m5.696 25.798l-2.144-10.929c-0.32-1.721 8.342-7.983 9.102-12.135 0.754-4.105 2.309-8.826 1.949-11.086-0.787-4.941-4.344-10.785-7.129-11.93 1.592 0.654 7.646 4.684 9.426 14.268 1.049 5.652-2.777 16.158-6.67 20.176-3.631 3.748-4.534 11.636-4.534 11.636z"/>
						</g>
						<g 
							id="Note06"
							fill="blue"
							transform="matrix(.3826 0 0 -.3826 185.36 64.52)"
						>	
						<motion.path 
							animate={{y:[0, 22, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2362" 
							d="m5.433 25.838l-8.633-46.488 0.473-0.088 8.632 46.488-0.472 0.088z"/>
						<motion.path 
							animate={{y:[0, 22, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2360" 
							d="m-10.456-15.02c-3.922-0.477-6.807-3.283-6.443-6.271 0.361-2.986 3.834-5.023 7.756-4.547 3.92 0.476 6.805 3.283 6.441 6.27-0.361 2.988-3.834 5.023-7.754 4.548z"/>
						<motion.path 
							animate={{y:[0, 22, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2364" 
							d="m5.696 25.798l-2.144-10.929c-0.32-1.721 8.342-7.983 9.102-12.135 0.754-4.105 2.309-8.826 1.949-11.086-0.787-4.941-4.344-10.785-7.129-11.93 1.592 0.654 7.646 4.684 9.426 14.268 1.049 5.652-2.777 16.158-6.67 20.176-3.631 3.748-4.534 11.636-4.534 11.636z"/>
						</g>
						<g 
							id="Note07"
							fill="yellow"
							transform="matrix(.3826 0 0 -.3826 172.45 56.941)"
						>
						<motion.path 
							animate={{y:[0, 24, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2362" 
							d="m5.433 25.838l-8.633-46.488 0.473-0.088 8.632 46.488-0.472 0.088z"/>
						<motion.path 
							animate={{y:[0, 24, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2360" 
							d="m-10.456-15.02c-3.922-0.477-6.807-3.283-6.443-6.271 0.361-2.986 3.834-5.023 7.756-4.547 3.92 0.476 6.805 3.283 6.441 6.27-0.361 2.988-3.834 5.023-7.754 4.548z"/>
						<motion.path 
							animate={{y:[0, 24, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2364" 
							d="m5.696 25.798l-2.144-10.929c-0.32-1.721 8.342-7.983 9.102-12.135 0.754-4.105 2.309-8.826 1.949-11.086-0.787-4.941-4.344-10.785-7.129-11.93 1.592 0.654 7.646 4.684 9.426 14.268 1.049 5.652-2.777 16.158-6.67 20.176-3.631 3.748-4.534 11.636-4.534 11.636z"/>
						</g>
						<g 
							id="Note08"
							fill="red"
							transform="matrix(.3826 0 0 -.3826 167.1 48.672)"
						>
						<motion.path 
							animate={{y:[0, 18, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2362" 
							d="m5.433 25.838l-8.633-46.488 0.473-0.088 8.632 46.488-0.472 0.088z"/>
						<motion.path 
							animate={{y:[0, 18, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2360" 
							d="m-10.456-15.02c-3.922-0.477-6.807-3.283-6.443-6.271 0.361-2.986 3.834-5.023 7.756-4.547 3.92 0.476 6.805 3.283 6.441 6.27-0.361 2.988-3.834 5.023-7.754 4.548z"/>
						<motion.path 
							animate={{y:[0, 18, 0]}}
							transition={{ duration:1, repeat: Infinity}}
							id="path2364" 
							d="m5.696 25.798l-2.144-10.929c-0.32-1.721 8.342-7.983 9.102-12.135 0.754-4.105 2.309-8.826 1.949-11.086-0.787-4.941-4.344-10.785-7.129-11.93 1.592 0.654 7.646 4.684 9.426 14.268 1.049 5.652-2.777 16.158-6.67 20.176-3.631 3.748-4.534 11.636-4.534 11.636z"/>
						</g>
					</g>
					<g 
						id="legs"
						stroke="#000"
						fill="#fff"
						transform="translate(175 75)"
					>
			    		<path id="path2371" stroke-width="2" d="m62.392 192.52c4.722-1.996 16.506-10.921 17.235 1.359 0.456 7.686-12.708 9.406-18.375 9.268-0.272 1.262-1.803 2.665-2.073 3.943-6.972-1.39-5.646-7.243-8.624-11.253"/>
						<path id="path2373" stroke-width="2" d="m55.779 177.92c5.38 5.27 6.17 15.389 6.563 22.551-3.516 1.261-8.351 1.231-11.912 0.28-5.128-1.37-4.232-1.921-6.651-6.164-3.423-6.002-5.96-12.169-9.333-18"/>
						<path id="path2375" stroke-width="2" d="m152.76 202.83c1.677-3.577 4.008-6.857 7.354-9.036 2.498-1.626 5.096-4.165 8.077-4.648 3.071-0.498 6.495 2.573 6.954 5.438 0.234 1.461 0.559 3.324 0.538 4.731-0.033 2.349-1.469 3.567-2.848 5.187-2.021 2.377-3.773 4.883-5.472 7.522-1.756 2.728-1.804 6.142-3.928 8.659-2.131 2.525-4.93 2.672-7.664 3.732-1.375 0.533-2.741 1.286-4.184 1.505-1.926 0.293-2.872-0.789-4.183-2.51"/>
						<path id="path2377" d="m59.112 126.24c7.915-0.112 17.205 2.649 24.643 5.172 14.469 4.908 30.361 7.848 45.387 11.208 12.634 2.825 25.06 4.605 37.526 7.819 9.915 2.556 18.408 3.73 27.01 8.956 6.57-6.554 14.401-12.488 21.302-19.043 5.959-5.661 13.159-9.188 17.349-16.353"/>
						<path id="path2379" d="m150.54 127.32c2.594 1.802 4.15 2.069 7.063 0.691 2.662-1.26 4.909-3.493 5.479-6.484 0.438-2.294 1.414-7.421 0.437-9.524-1.395-3.001-5.265-1.023-6.813 0.648"/>
						<path id="path2381" stroke-width="1.1096" d="m130.12 129.14c3.105-2.457 7.242-4.038 9.704-7.511 1.231-1.736 1.306-6.164 4.142-5.704 0.104 2.447-1.339 4.206-1.34 6.32 2.331 0.62 2.301-1.208 2.839-2.75 0.621-1.778 1.535-2.803 2.948-4.145 1.5-1.425 8.604-4.51 8.726 0.042-2.77-0.345-8.006-1.229-7.255 3.375 1.913-2.963 5.84-2.329 8.663-0.467 0.218 0.427 0.312 1.094 0.24 1.58-1.888 0.32-6.713-2.724-7.227 1.183 2.528 0.408 8.533-0.453 6.268 4.5-2.312-1.67-4.339-2.572-6.292-0.437-1.398 1.529-3.288 3.052-4.76 4.659-1.204 1.316-1.525 2.064-3.246 2.43-1.414 0.301-2.974-0.221-4.352 0.172-2.507 0.716-5.311 4.318-7.882 3.849"/>
						<path id="path2383" stroke-width="2" d="m18.696 138.39c-0.021 5.89-2.709 17.682 0.259 21.819 4.58 6.383 14.058 3.434 20.521 5.423 19.398 5.972 26.6 6.519 46.753 3.963 33.388-4.233 44.535 27.771 56.036 53.014 11.678-2.28 16.906-12.947 16.906-12.947s-11.386-31.013-19.417-41.063c-7.916-9.905-16.667-18.91-25.019-21.898-7.052-2.523-18.779 2.531-36.299 0.78"/>
            		</g>
					<g 
						id="computer"
						stroke="#000"
						transform="translate(175 75)"
					>
						<path id="path2387" stroke-width="3" fill="#fff" x="365" y="365" d="m63.082 45.521c5.163 0.287 11.581-1.726 16.938-2.242 5.615-0.542 10.832-0.547 16.572-1.123 5.231-0.524 11.203-2.175 16.505-1.678 6.794 0.637 4.878 3.603 4.234 9.403-1.046 9.44-1.679 19.378-2.13 29.121-0.159 3.438 1.368 11.467-1.518 13.759-2.782 2.21-10.995 0.685-14.168-0.121-10.78-2.737-21.883-6.197-33.534-5.722-2.818-6.65-2.189-13.577-1.767-20.793 0.396-6.752-0.147-13.441 0.548-20.043"/>
						<path id="path2389" stroke-width="3" fill="#fff" d="m116.9 42.158c6.239 0 11.975-1.107 11.646 6.477-0.257 5.949-2.088 12.642-2.678 18.749-0.586 6.073-0.397 12.33-0.686 18.527-0.386 8.317-4.117 6.698-11.646 6.698"/>
						<path id="path2391" stroke-width="3" fill="#fff" d="m125.86 89.807c3.996-5.068 13.844-10.731 16.174-16.369 2.593-6.274-2.611-14.128-2.246-20.533-2.94-1.165-6.041-1.326-8.883-2.338"/>
						<path id="path2393" fill="#ccc" d="m100.08 50.566c-5.69 0-25.097-3.261-29.007 1.233-3.553 4.083-0.897 21.773-0.618 27.258 9.815 3.25 20.203 6.243 30.648 5.605 2.418-6.023 11.944-30.316 2.34-33.537"/>
						<path id="path2395" stroke-width="3" fill="#ccc" d="m81.02 89.807c-0.374 4.215-13.798 5.614-5.616 9.542 2.56 1.229 8.485 0.373 11.374 0.971 3.528 0.73 7.119 1.671 10.501 2.365 2.07 0.425 7.921 2.438 9.527 2.162 2.979-0.513 3.316-2.896 6.307-4.262 2.264-1.033 7.34 0.369 8.858-1.78 2.091-2.958-0.521-4.643-3.953-5.074"/>
            		</g>
            		<g 
						id="body" 
						transform="translate(175 75)"
					>
                		<path id="path2417" stroke="#000" fill="none" d="m59.672 131.85c5.882 0.096 11.955 2.876 17.843 3.812 4.938 0.785 9.893 1.517 14.62 2.933 12.669 3.793 25.145 8.558 38.126 11.071 11.722 2.269 23.783 4.646 35.319 7.412 5.325 1.277 24.079 2.699 26.514 8.338 2.554-0.774 4.534 0.335 7.188-0.93 2.567-1.223 3.384-3.743 5.144-5.619 3.218-3.431 7.557-6.493 11.085-9.513 3.551-3.04 6.476-6.324 9.671-9.629 3.19-3.299 7.938-5.65 10.51-8.996"/>
						<path id="path2419" stroke="#000" stroke-width="2" fill="none" d="m193.65 158.19c0.01 2.67-0.272 5.331 0.561 7.848"/>
						<path id="path2421" stroke="#000" fill="none" d="m179.64 161.56c-0.008 20.038 4.484 39.229 4.484 59.545 0 9.873-0.146 19.716-0.59 29.516-0.081 1.793-1.097 8.173-0.442 9.474 1.346 2.677 5.677 2.719 7.228 5.532 0.021-4.435 2.243-5.334 4.58-8.617 2.977-4.181 3.087-7.296 3.363-12.922 0.417-8.501 0.437-17.273 0.437-25.911 0-17.058 1.11-34.319-0.562-51.012"/>
						<path id="path2423" stroke="#000" fill="none" d="m186.92 163.8v52.16c0 8.3 0.173 16.533 0.561 24.763 0.313 6.629-1.52 14.906 0.561 21.177"/>
						<path id="path2425" stroke="#000" fill="none" d="m74.445 63.736c-0.122-1.149 0.083-2.853 1.397-3.314 1.569-0.551 2.047 1.411 2.326 3.06 0.211-0.323 0.594-0.518 0.788-0.774-0.329 3.282 2.727-0.743 3.778-0.851 1.833-0.189 1.515 1.327 2.464 2.535 1.106-2.522 1.751 0.475 3.052 0.604 1.553 0.154 3.239-1.442 5.184-1.248 2.295 0.229 5.715 1.472 7.492 1.643"/>
						<path id="path2427" stroke="#000" fill="none" d="m74.693 73.916c0.145-0.195 1.012-1.159 1.62-1.437-0.096 2.649 2.148 0.44 3.56 0.606 1.527 0.179 2.112 1.4 3.757 1.409 0.835 0.004 1.491-0.602 2.39-0.592 0.999 0.011 2.277 0.758 3.366 0.898 1.639 0.211 4.526 0.779 5.788 0.564"/>
						<path id="path2429" stroke="#000" stroke-width="2" fill="#fff" d="m16.078 108.09c-1.317 5.482-6.884 11.649-12.444 8.737-3.258-1.707-3.662-14.993-0.37-23.878 2.341-6.32 7.482-10.672 9.999-16.853 2.287-5.617 2.47-11.789 5.282-17.23 0.954-0.143 4.844-1.418 5.828-1.218l0.056-0.233c2.55 10.188 20.89 5.024 28.566 5.434 0.228 10.706 7.043 13.493 16.097 16.583 8.015 2.735 12.616 8.272 15.483 15.986 3.511 9.445 4.11 24.65 15.854 28.696 3.868 1.333 10.024 0.961 14.148 1.835 5.218 1.106 10.396 1.239 15.753 1.567 1.648 9.745 3.471 13.244-7.904 13.232-7.521-0.008-17.778 1.637-24.664-0.817-5.747-2.048-15.427-7.861-20.132-11.704-5.687-4.644-6.225-13.254-12.401-17.411-0.881 13.304 6.65 31.991 21.767 33.363 3.497 20.539-30.841 7.722-33.989 7.335s-15.64-0.272-23.389-0.768c-6.113-0.391-4.463-0.976-8.508-3.998-7.264-5.427-12.187-5.379-10.177-15.351 1.542-7.655 4.185-14.726 4.164-22.799-0.019-7.385 0.811-13.788 1.865-20.319"/>
						<path id="path2431" stroke="#000" fill="#fff" d="m149.48 111.17c0.773-1.129 3.004-2.186 4.039-1.063"/>
						<path id="path2433" stroke="#000" fill="#fff" d="m149.27 107.34c1.069-0.823 2.917-1.02 4.251-0.85"/>
						<path id="path2435" stroke="#000" fill="none" d="m151.59 90.189c4.741-1.202 5.714-6.907 10.799-6.818 12.045 0.21 2.614 5.724 3.245 9.674 4.268 0.136 11.552-1.733 14.084 0.201 5.536 4.232-4.54 4.356-7.901 5.465-3.31 1.093-10.397 4.388-12.012 6.898-2.222 3.456 1.409 7.357-3.71 9.891"/>
						<path id="path2437" stroke="#000" stroke-width="2" fill="#fff" d="m49.634 175.01c2.219 6.798 1.808 11.932 1.171 18.962-0.562 6.207 0.679 12.472 0.356 18.703-2.476 0.497-4.266-0.551-6.538-1.199 2.406-5.003 0.665-14.278 1.436-19.788 0.845-6.04-0.283-11.225-1.19-16.679"/>
						<path id="path2439" stroke="#000" stroke-width="2" fill="#fff" d="m15.483 153.17c17.526 11.569 40.126 10.971 60.302 11.972 1.566 7.586 11.482 5.741 16.291 8.767-0.613 5.096-34.948 3.585-40.028 3.078-10.613-1.061-32.123-0.009-35.354-12.32-0.942-3.592-2.511-6.396-2.403-10.304"/>
						<path id="path2441" stroke="#000" fill="#fff" d="m44.075 211.94c-6.373 1.959-14.044 0.061-20.591 1.656-1.04 2.314-3.748 3.149-4.654 5.413 0.945 0.62 2.276 1.303 3.306 1.608 6.118-7.157 18.2-4.706 27.169-4.706 5.925 0 10.099 0.13 15.031 3.574 3.739 2.61 6.874 5.33 11.14 7 3.401-4.37-5.452-8.933-8.379-10.86-5.307-3.494-9.536-2.417-15.477-4.082"/>
						<path id="path2443" stroke="#000" fill="#fff" d="m54.002 216.31c1.114 1.724 2.961 2.745 3.533 4.696-4.174 0.205-5.878-0.189-7.504-4.299"/>
						<path id="path2445" stroke="#000" stroke-width="2" fill="#fff" d="m20.248 222.27c-5.078-0.589-7.003 5.754-2.283 7.554 2.777 1.059 3.874-0.254 4.269-2.789 0.264-1.693-1.697-5.019-0.794-4.368"/>
						<path id="path2447" stroke="#000" stroke-width="2" fill="#fff" d="m76.241 229.02c-2.287-1.052-5.134-1.12-7.485-0.327-1.444 6.401 9.09 8.89 7.882 1.121"/>
						<path id="path2449" stroke="#000" stroke-width="2" fill="#fff" d="m55.988 223.46c-8.912 0.029-6.726 6.166 0.725 5.49 0.804-1.736 0.324-3.467-0.328-5.093"/>
						<path id="path2451" stroke="#000" fill="#fff" d="m23.935 60.375c2.385-2.95 5.684-6.127 5.56-10.325"/>
						<path id="path2453" stroke="#000" fill="#fff" d="m46.855 63.027c0.278-2.89-0.877-5.741-0.794-8.737"/>
						<path id="path2455" stroke="#000" stroke-width="2" fill="none" d="m88.446 105.92c6.787 1.814 13.81 2.296 20.682 4.019 4.165 1.044 4.693 2.502 8.503 0.648 2.112-1.029 3.879-4.694 5.464-6.018 4.248-3.548 9.106-6.064 13.205-10.131 4.292-4.258 7.322-8.513 12.91-11.185-3.523-2.317-6.817-4.401-11.431-4.667"/>
						<path id="path2457" stroke="#000" stroke-width="2" fill="none" d="m93.779 117.92c7.496 0.651 15.279 0.689 21.833 4.568 13.822-11.864 30.159-21.923 34.253-23.361 0.384-7.554 0.831-11.4 0.831-15.237"/>
						<path id="path2459" fill="#BDDFE7" d="m21.631 64.83c-0.038 6.057-1.182 13.586-5.525 18.024-3.189 3.258-7.581 4.419-9.347 9.42-1.121 3.174-1.089 10.158 1.053 12.638 1.794 2.077 3.716 0.89 5.532 2.936 1.844 2.078 1.35 3.628 1.449 6.43 0.332 9.382-2.679 19.009 7.48 23.03 9.129 3.614 19.981 6.225 29.316 8.033 3.73 0.723 15.476 3.68 18.872 2.101 5.914-2.75-1.768-8.768-4.247-12.122-4.378-5.923-9.396-22.861-6.089-29.894 8.47-3.105 17.677 18.546 24.75 22.384 5.473 2.969 30.881 13.575 31.379 3.38-8.691-3.327-18.971-2.607-26.225-8.905-7.915-6.875-7.943-17.925-12.229-26.843-5.042-10.492-16.134-7.287-23.58-14.833-3.147-3.189-2.594-7.998-6.289-11.07-4.283-3.562-13.255-2.594-18.421-3.145-3.246-0.346-6.563-1.105-9.826-1.036 0.96-0.307 0.984 0.286 1.421 0.524"/>
            		</g>
            		<g 
						id="head" 
						fill="none" 
						stroke="#000" 
						stroke-width="1.1553" 
						transform="translate(175 75)"
					>
						<path id="path2463" d="m29.352 51.143c0.856-7.765-9.165-12.585-11.142-19.919-2.558-9.49-0.078-19.071 5.03-26.388 0.564 1.296 2.315 1.986 2.792 2.715 2.573-2.181 4.507-0.67 7.07-2.9 0.261 0.74 0.833 1.442 1.101 2.146 0.871-1.014 2.734-1.352 3.511-2.146 0.471 0.507 5.541 2.938 6.197 2.975 3.144 0.179 7.073-3.106 8.364 2.313 9.593-5.702 3.406 12.949 3.044 15.073-1.134 6.657 2.368 11.672-0.5 18.773-4.616 2.279-6.082 8.81-7.685 12.799"/>
						<path id="path2465" d="m56.581 25.75c3.162-0.215 4.665 2.701 3.793 5.94-1.64 0.616-2.854 1.79-4.349 2.524"/>
						<path id="path2467" d="m60.471 28.773c-3.426-0.475-11.405 5.338-13.336 7.86"/>
					</g>
            		<g 
						id="papers" 
						transform="translate(175 75)"
					>
                		<path id="path2469" fill="#ccc" d="m26.112 9.14c-7.311 0.59-5.001 6.461-4.806 11.689 0.147 3.937-1.212 10.502 2.059 13.317 2.832 2.436 8.577 2.172 12.118 3.37 3.394 1.148 7.43 2.026 10.716-0.051 6.352-4.014 6.711-13.58 6.739-20.32 0.009-2.201-0.289-2.707-2.848-3.835-3.866-1.704-8.501-2.443-12.611-3.26-3.623-0.72-7.696-1.585-11.366-0.681"/>
						<path id="path2471" stroke="#000" stroke-width="2" fill="#fff" d="m20.249 102.34c2.903-1.137 4.426-3.319 7.457-4.059 3.702-0.904 7.97 0.302 11.693 0.904 6.524 1.056 13.505 0.291 15.883 7.039 1.313 3.727 5.031 13.362 1.521 16.755-4.11 3.974-14.384 2.393-19.875 2.393-6.002 0-12.947 0.765-16.679-4.765-2.603-3.857-3.282-14.331 0-17.87"/>
						<path id="path2473" stroke="#000" stroke-width="2" fill="#fff" d="m40.104 126.17c-2.889 7.669 1.008 15.961 2.461 22.774 1.412 6.616 2.706 15.535 4.934 21.229-3.619 0.285-6.653 0.817-8.972-2.909-1.751-2.814-2.854-8.266-3.693-11.901-1.752-7.592-3.537-20.159-1.878-28.002"/>
						<path id="path2475" stroke="#000" stroke-width="2" fill="none" d="m184.57 114.97c-3.287 3.805-7.906 6.253-11.456 9.748 5.983 0.996 11.744 2.767 17.613 4.283 2.269-3.232 5.648-5.843 7.476-8.996-4.578-1.598-9.223-2.652-14.181-3.393"/>
						<path id="path2477" stroke="#000" stroke-width="2" fill="none" d="m182.66 129.04c-3.287 3.805-7.906 6.253-11.456 9.748 5.983 0.996 11.744 2.767 17.613 4.283 2.269-3.232 5.648-5.843 7.476-8.996-4.578-1.598-9.223-2.652-14.181-3.393"/>
						<path id="path2479" stroke="#000" stroke-width="2" fill="#fff" d="m183.85 110.51c-3.032 4.011-7.481 6.756-10.796 10.475 6.035 0.603 11.899 1.995 17.855 3.125 2.053-3.374 5.255-6.199 6.872-9.465-4.672-1.295-9.376-2.045-14.371-2.46"/>
						<path id="path2481" stroke="#000" stroke-width="2" fill="#fff" d="m187.46 112.55c-4.018 3.023-9.05 4.438-13.259 7.103 5.637 2.239 10.893 5.189 16.308 7.913 2.901-2.679 6.757-4.515 9.21-7.21-4.136-2.53-8.452-4.544-13.142-6.316"/>
            		</g>		
           	 		<g 
						id="crease"
						fill="none"
						stroke="#000"
						transform="translate(175 75)"
					>
                		<path id="path2483" d="m104.4 170.98c0-3.634-1.326-7.595-0.877-10.967"/>
						<path id="path2485" d="m104.84 171.41c3.234-3.095 4.621-8.164 7.896-10.09"/>
           	 		</g>
        		</g>
      		</svg>
		</div>
		
		<div className="w-full h-1/2">
			
		</div>
	</div>
 );
};

export default BigGuy;
