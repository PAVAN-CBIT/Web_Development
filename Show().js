<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>jQuery</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
		
	</script>
</head>
<body>

<p>Hello world..!</p>
<button id="hide">Hide</button>
<button id="show">Show</button>

<script type="text/javascript">
	
	$(document).ready(function()
	{
      
      $("#show").click(function()
      {
         $("p").show(2000);
      });
	});
</script>

</body>
</html>
