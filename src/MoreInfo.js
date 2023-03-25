export const MoreInfo = (props) => {
  return (
    <div className="more-info">
      <div>From: {props.from}</div>
      <div>To: {props.to}</div>
      <div>Amount: {props.amount} ETH</div>
    </div>
  );
};

export default MoreInfo;
