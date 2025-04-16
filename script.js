$(document).ready(function () {
  function loadMarquee() {
    $.getJSON("data.json", function (data) {
      let marqueeInner = $("#marqueeInner")
      marqueeInner.empty()

      data.forEach((member) => {
        let marqueeItem = `
          <div class="marquee-item card mx-2 position-relative">
            <div class="card-background"></div>
            <img src="${member.foto}" class="card-img-top member-foto" alt="${member.name}">
            <div class="card-body position-relative z-index-1 bg-white">
              <div class="card-container">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-subtitle mb-2 text-muted">${member.role}</p>
                <p class="card-text"><small>"${member.quote}"</small></p>
                <div class="text-muted"><small>@${member.username}</small></div>
              </div>
              <a href="${member.nickname}.html" class="btn btn-primary position-absolute bottom-0 start-0">See Portfolio</a>
            </div>
          </div>
        `
        marqueeInner.append(marqueeItem)
      })

      // Inisialisasi marquee
      $("#marqueeInner").marquee({
        duration: 10000,
        gap: 20,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: true,
        startVisible: true,
        pauseOnHover: true,
      })
    }).fail(function () {
      console.error("Error loading JSON data.")
    })
  }

  loadMarquee()
})
