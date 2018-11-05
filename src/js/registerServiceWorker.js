/**
 *  author : liuzhuo
 *  date : 2018/11/1
 *  time : 15:51
 */

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker/service-worker.js", {
      scope: "/service-worker/"
    })
    .then(reg => {
      console.log(reg);
    })
    .catch(err => {
      console.log(err);
    });
}
