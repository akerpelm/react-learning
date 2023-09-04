import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// // Tweet
// // function Tweet() {
// //   return (
// //     <div className="tweet">
// //       <Avatar />
// //       <div className="content">
// //         <NameWithHandle />
// //         <Time />
// //         <Message />
// //         <div className="buttons">
// //           <ReplyButton />
// //           <RetweetButton />
// //           <LikeButton />
// //           <MoreOptionsButton />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function Avatar() {
// //   return (
// //     <img
// //       src="https://www.gravatar.com/avatar/nothing"
// //       className="avatar"
// //       alt="avatar"
// //     />
// //   );
// // }

// // function Message() {
// //   return <div className="message">This is less than 140 characters</div>;
// // }

// // function NameWithHandle() {
// //   return (
// //     <span className="name-with-handle">
// //       <span className="name">Alex</span>
// //       <span className="handle">@alex</span>
// //     </span>
// //   );
// // }

// // const Time = () => <span className="time">3h ago</span>;

// // const ReplyButton = () => <i className="fa fa-reply reply-button" />;

// // const RetweetButton = () => <i className="fa fa-retweet retweet button" />;

// // const LikeButton = () => <i className="fa fa-heart like-button" />;

// // const MoreOptionsButton = () => (
// //   <i className="fa fa-ellipsis-h more-options-button" />
// // );

// // Address Label
// // const AddressLabel = ({ user }) => {
// //   const { name, address, city, state, zipCode } = user;
// //   return (
// //     <div class="envelope">
// //       <div className="header">
// //         <div className="sender">
// //           Sender
// //           <br />
// //           123 Brooklyn Ave.
// //           <br />
// //           Rochester, NY
// //         </div>
// //         <div className="stamp">Stamp</div>
// //       </div>
// //       <div className="body">
// //         {name}
// //         <br />
// //         {address}
// //         <br />
// //         {city}, {state} {zipCode}
// //       </div>
// //     </div>
// //   );
// // };

// // const CreditCard = ({ cardDetails }) => {
// //   const { company, cardNumber, CCV, expiryDate, cardholder } = cardDetails;
// //   console.log(company, 'co');
// //   return (
// //     <div className="container">
// //       <div className="company-name">{company}</div>
// //       <div className="cc-body">
// //         <div className="card-no">{cardNumber}</div>
// //         <div className="ccv">{CCV}</div>
// //         <div className="expiry">{expiryDate}</div>
// //         <div className="cardholder-name">{cardholder}</div>
// //       </div>
// //     </div>
// //   );
// // };

// // // const testUser = {
// // //   name: 'Alex Kerpelman',
// // //   address: '274 N. Goodman St. Apt 600',
// // //   city: 'Rochester',
// // //   state: 'NY',
// // //   zipCode: 14607
// // // };

// // const testCard = {
// //   company: 'Chase',
// //   cardNumber: '1224 2039 3298 1580 2859',
// //   CCV: '022',
// //   expiryDate: '01/28',
// //   cardholder: 'Alex Kerpelman'
// // };

// ReactDOM.render(
//   <CreditCard cardDetails={testCard} />,
//   document.querySelector('#root')
// );
// // // ReactDOM.render(
// // //   <AddressLabel user={testUser} />,
// // //   document.querySelector('#root')
// // // );
// // // ReactDOM.render(<Tweet />, document.querySelector('#root'));

// class Counter extends React.Component {
//   state = {
//     actionCount: 0
//   };

//   handleAction = () => {
//     this.setState({
//       actionCount: this.state.actionCount + 1
//     });
//   };

//   handleReset = () => {
//     this.setState({
//       actionCount: 0
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Child onAction={this.handleAction} onReset={this.handleReset} />
//         <p>Clicked {this.state.actionCount} times</p>
//         {/* <button
//           disabled={this.state.actionCount <= 0}
//           onClick={this.handleReset}
//         >
//           Reset
//         </button> */}
//       </div>
//     );
//   }
// }

// const Page = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };

// function Child({ onAction, onReset }) {
//   return (
//     <div>
//       <button onClick={onAction}> Click Me</button>
//       <button onClick={onReset}>Rest</button>
//     </div>
//   );
// }

ReactDOM.render(<App />, document.querySelector('#root'));
