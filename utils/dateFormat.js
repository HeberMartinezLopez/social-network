const dateFormat = (timestamp) => {
    const date = new Date(timestamp);
    
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZoneName: 'short'
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  
  module.exports = dateFormat;