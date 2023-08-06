$('document').ready(function () {
  const amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      const amenityName = $(this).attr('data-name');
      amenities[$(this).attr('data-id')] = amenityName.slice(1);
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    $('.amenities H4').text(Object.values(amenities).join(', '));
  });
});
