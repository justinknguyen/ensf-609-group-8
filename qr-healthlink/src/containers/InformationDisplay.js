// import { useEffect, useState } from "react";

export default function InformationDisplay(props) {
	
	return (
	  <div>
		<div>
		  <label>
			<p>Name</p>
			<input
			  type={"text"}
			  value={props.data.name}
			  placeholder={props.readOnly?"":"e.g. Jane Doe"}
			  readOnly={props.readOnly}
			  onChange={(event) => {
				if(props.readOnly) return;
				props.setters.nameSet(event.target.value);
			  }}
			/>
		  </label>
		  <label>
			<p>Date of Birth</p>
			<input
			  type={"text"}
			  value={props.data.dateOfBirth}
			  readOnly={props.readOnly}
			//   onChange={(event) => {
			// 	dateOfBirthSet(event.target.value);
			//   }}
			/>
		  </label>
		  <label>
			<p>Alberta Health Number</p>
			<input
			  type={"text"}
			  value={props.data.albertaHealthNumber}
			  placeholder={props.readOnly?"":"e.g. 123456789"}
			  readOnly={props.readOnly}
			//   onChange={(event) => {
			// 	albertaHealthNumberSet(event.target.value);
			//   }}
			/>
		  </label>
		  <label>
			<p>Email</p>
			<input
			  type={"text"}
			  value={props.data.email}
			  placeholder={props.readOnly?"":"e.g. someone@gmail.com"}
			  readOnly={props.readOnly}
			//   onChange={(event) => {
			// 	emailSet(event.target.value);
			//   }}
			/>
		  </label>
		  <label>
			<p>Phone</p>
			<input
			  type={"text"}
			  value={props.data.phone}
			  placeholder={props.readOnly?"":"e.g. +1 123 456 7890"}
			  readOnly={props.readOnly}
			//   onChange={(event) => {
			// 	phoneSet(event.target.value);
			//   }}
			/>
		  </label>
		  <label>
			<p>Summary</p>
			<input
			  type={"text"}
			  value={props.data.summary}
			  placeholder={props.readOnly?"":"e.g. Leg fracture"}
			  readOnly={props.readOnly}
			//   onChange={(event) => {
			// 	summarySet(event.target.value);
			//   }}
			/>
		  </label>
		</div>
	  </div>
	);
  }
  