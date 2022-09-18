export const afterValidate = (callBack, setSnakeBarProps) => {
    var errorMszDom = [];
    setTimeout(() => {
        errorMszDom = document.getElementsByClassName("errorDom");
        if (errorMszDom.length == 0) {
            callBack()
        } else {
            setSnakeBarProps({ snackbarFlag: true, msz: "Please fill all the required field", type: "error" })
        }
    });
}

export function maskEmail(target) {
    var email = target //anas.behhari@gmail.com
    var hiddenEmail = "";
    for (var i = 0; i < email.length; i++) {
        if (i > 2 && i < email.indexOf("@")) {
            hiddenEmail += "*";
        } else if (i > email.indexOf("@") && i < email.length - 6) {
            hiddenEmail += "*";

        } else {
            hiddenEmail += email[i];
        }
    }

    return (hiddenEmail)
}

export const openInNewTab = (url) => {
    // const fileURL = URL.createObjectURL(file);
    //Open the URL on new Window
    const pdfWindow = window.open();
    pdfWindow.location.href = url;
}

export const amToTwentyFour = (time) => {
    var hour = parseInt(time.slice(0, 2), 10);
    var min = parseInt(time.slice(3, 5), 10);
    var type = time.slice(6, 8);
    if (type == 'pm' && hour < 12) {
        hour = hour + 12;
    } else if (type == 'am' && hour == 12) {
        hour = 0;
    }
    console.log({ hour, min, type })
    return `${hour}:${min}`
}

export const getLocalTime = (time) => {
    // const dateToTime = date => date.toLocaleString('en-US', {
    //     hour: 'numeric',
    //     minute: 'numeric'
    //   });

    const dateString = time.toUTCString();
    //   const userOffset = time.getTimezoneOffset()*60*1000;
    const localDate = new Date(dateString);
    //  const utcDate = new Date(localDate.getTime() + userOffset);
    return (localDate);
    // console.log(`${dateToTime(utcDate)} (${dateToTime(localDate)} Your Time)`);
}

export const setInput = (value, type, pageData, setPageData) => {
    setPageData({ ...pageData, [type]: value })
}
 
export const urlToName = (url) => {
    const startIndex = [...url.matchAll(new RegExp('filename%3D%22', 'gi'))].map(a => a.index);
    const endIndex = [...url.matchAll(new RegExp('%22%3B%20filename', 'gi'))].map(a => a.index);
  //  console.log("filename", url.slice(startIndex[0] + 14, endIndex[0]))
 
    return url.slice(startIndex[0] + 14, endIndex[0]).replace(/%20/g, " ");
}

export const DownloadFile = (fileName) => {
    //Set the File URL.
    var url = fileName;

    //Create XMLHTTP Request.
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
        //Convert the Byte Data to BLOB object.
        var blob = new Blob([req.response], { type: "application/octetstream" });

        //Check the Browser type and download the File.
        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            var url = window.URL || window.webkitURL;
            var link = url.createObjectURL(blob);
            var a = document.createElement("a");
            a.setAttribute("download", fileName);
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    req.send();
};