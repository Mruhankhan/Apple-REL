let introducingNewPhonesText = document.getElementById(
  "introducingNewPhonesText"
);

timeoutIntroducingNewPhonesText(1200)
  .then(() => {
    let introducingNewPhonesText = document.getElementById(
      "introducingNewPhonesText"
    );
    introducingNewPhonesText.innerText = "Introducing Our Newest Phones";
    return timeoutIntroducingNewPhonesText(1400);
  })
  .then(() => {
    let introducingNewPhonesText = document.getElementById(
      "introducingNewPhonesText"
    );
    introducingNewPhonesText.innerText = "Iphone 14 Pro For $1200";
    return timeoutIntroducingNewPhonesText(1600);
  })
  .then(() => {
    let introducingNewPhonesText = document.getElementById(
      "introducingNewPhonesText"
    );
    introducingNewPhonesText.innerText = "Samsung s23 Ultra For $1500";
    return timeoutIntroducingNewPhonesText(1800);
  })

  .then(() => {
    let introducingNewPhonesText = document.getElementById(
      "introducingNewPhonesText"
    );
    introducingNewPhonesText.innerText = "Buy Fast Now On Sale!!!";
    return timeoutIntroducingNewPhonesText(2000);
  })
  .catch((e) => {
    console.error(e);
    Promise.reject(e);
  })
  .then(() => {
    try {
      Promise.resolve(timeoutIntroducingNewPhonesText());
    } catch {
      Promise.reject(timeoutIntroducingNewPhonesText());
    }
  });
function timeoutIntroducingNewPhonesText(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}