const BASE_URL = "https://www.gadifor.me";

const preProcess = () => {
  $("#homePageForm").submit(function (e) {
    e.preventDefault();
    const Name = $("#Name").val(),
      Phone = $("#Phone").val();
    $.ajax({
      type: "POST",
      url: `${BASE_URL}/trip/add`,
      data: { Name, Phone },
    })
      .then((resp) => {
        Swal.fire({
          icon: "success",
          title: resp.message,
          text: "We will contact you Soon",
          footer: '<a href="tel:+918077015752">Feel Free to Contact</a>',
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: err.responseJSON.message,
          footer: '<a href="tel:+918077015752">Call for Support</a>',
        });
      });
  });
};

const validateNewTrip = (e) => {
  e.preventDefault();
  alert(Submitted);
  return false;
};
