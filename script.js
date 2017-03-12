 $(document).ready(function() {
 	var arr=[];
 	var count=1;
 	$(".carousel").hide();
 	$(".btn").on('click', function(event) {
 		$(".image").each(function(i, el) {
	 		arr[i]=$(".image").attr("src");
	 		console.log(arr[i]);
	 		$(".carousel").show();
	 		$("#"+count).attr({src:arr[i]});
	 		$(".image:first").remove();
	 		count++;
 		});
 		$(".table").remove();
 	});
});	

