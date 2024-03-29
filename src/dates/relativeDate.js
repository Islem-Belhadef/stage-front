const  relativeDate = (d) => {
    const date = new Date(d)
    const diff = Math.round((new Date() - new Date(date)) / 1000);
  
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = month * 12;
  
    if (diff < 30) {
      return "just now";
    } else if (diff < minute) {
      return diff + " seconds ago";
    } else if (diff < 2 * minute) {
      return "a minute ago";
    } else if (diff < hour) {
      return Math.floor(diff / minute) + " minutes ago";
    } else if (Math.floor(diff / hour) == 1) {
      return "1 hour ago";
    } else if (diff < day) {
      return Math.floor(diff / hour) + " hours ago";
    } else if (diff < day * 2) {
      return "yesterday";
    } else if (diff < week) {
      return Math.floor(diff / day) + " days ago";
    }  else if (Math.floor(diff / week) == 1) {
      return "1 week ago";
    }else if (diff < month) {
      return Math.floor(diff / week) + " weeks ago";
    } else if (Math.floor(diff / month) == 1) {
      return "1 month ago";
    } else if (diff < month * 6) {
      return Math.floor(diff / month) + " months ago";
    } else {
      const mm = date.getMonth() + 1
      const dd = date.getDate()
      const yyyy = date.getFullYear()
      return `${yyyy}-${mm}-${dd}`;
    }
  }

  export default relativeDate