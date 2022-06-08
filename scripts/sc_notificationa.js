const btn1 = document.querySelector('#enable_bl');
const btn2 = document.querySelector('#greate_bl');

btn1.onclick = function() {
    Notification.requestPermission().then(function(result) {
        console.log(result);
    });
}

btn2.onclick = function() {
    //alert('hi hi');

    greatNotifff();
}

function greatNotifff() {
      alert('hi hi');

/*       var img = '../images/bell.png';
      var text = 'HEY! Your task "' + title + '" is now overdue.';
      var notification = new Notification('To do list', { body: text, icon: img }); */
}

/* function askNotificationPermission() {
    // function to actually ask the permissions
    function handlePermission(permission) {
      // set the button to shown or hidden, depending on what the user answers
      if(Notification.permission === 'denied' || Notification.permission === 'default') {
        notificationBtn.style.display = 'block';
      } else {
        notificationBtn.style.display = 'none';
      }
    }
  
    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      console.log("This browser does not support notifications.");
    } else {
      if(checkNotificationPromise()) {
        Notification.requestPermission()
        .then((permission) => {
          handlePermission(permission);
        })
      } else {
        Notification.requestPermission(function(permission) {
          handlePermission(permission);
        });
      }
    }
  } */


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


// function checkNotificationPromise() {
//     try {
//       Notification.requestPermission().then();
//     } catch(e) {
//       return false;
//     }

//     return true;
//   }

// if Notification.permission


// /* Notification.requestPermission().then(function(result) {
//     console.log(result);
//   }); */

// const myNotification = new Notification('Hello!');

// myNotification;