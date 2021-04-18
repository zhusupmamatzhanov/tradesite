 function AjaxFormRequest(result_id,formMain,url) {
 jQuery.ajax({
 url: url,
 type: "POST",
 dataType: "html",
 data: jQuery("#"+form_section).serialize(),
 success: function(response) {
 document.getElementById(result_id).innerHTML = response;
 },
 error: function(response) {
 document.getElementById(result_id).innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
 }
 });
  
 $(':input','#form_section')
 .not(':button, :submit, :reset, :hidden')
 .val('')
 .removeAttr('checked')
 .removeAttr('selected');
 }