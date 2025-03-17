$(document).ready(function () {
  function loadMarquee() {
    $.getJSON("data.json", function (data) {
      let marqueeInner = $("#marqueeInner")
      marqueeInner.empty()

      data.forEach((member) => {
        let marqueeItem = `
          <div class="marquee-item card mx-2">
            <img src="${member.foto}" class="card-img-top" alt="${member.name}">
            <div class="card-body">
              <h5 class="card-title">${member.name}</h5>
              <p class="card-subtitle mb-2 text-muted">${member.role}</p>
              <p class="card-text"><small>"${member.quote}"</small></p>
              <div class="text-muted"><small>@${member.username}</small></div>
            </div>
          </div>
        `
        marqueeInner.append(marqueeItem)
      })

      // Inisialisasi marquee
      $("#marqueeInner").marquee({
        duration: 35000,
        gap: 20,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: true,
        startVisible: true,
      })
    }).fail(function () {
      console.error("Error loading JSON data.")
    })
  }

  loadMarquee()
})
