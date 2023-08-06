$('document').ready(function () {
  const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
  $.get(url, function (response) {
    if (response.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  const amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      const amenityName = $(this).attr('data-name');
      amenities[$(this).attr('data-id')] = amenityName.slice(1);
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    if (Object.values(amenities).length === 0) {
      $('.amenities H4').html('&nbsp;');
    } else {
      $('.amenities H4').text(Object.values(amenities).join(', '));
    }
  });
});
