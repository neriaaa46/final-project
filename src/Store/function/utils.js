function whichClassStatus(status) {
    switch (status) {
      case "pending":
        status =  "ממתין"
        break
      case "inProgress": 
        status = "בהכנה"
        break
      case "ready":
        status = "מוכן"
        break
      case "sent":
        status = "נשלח"
        break
      default:
        status = "ממתין"
        break
    }
    return status
  }

export {whichClassStatus}