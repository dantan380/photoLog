const Title = () => {

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  let today = new Date();
  let day = today.getDate();
  let monthIndex = today.getMonth();
  let year = today.getFullYear();

  let monthName = monthNames[monthIndex];

  let formattedDate = monthName + ' ' + day + ' ' + year;
  return (
    <div className="title">
      <h1>PhotoLog</h1>
      <h2>Welcome</h2>
      <p>{formattedDate} </p>
    </div>
  )
}

export default Title;