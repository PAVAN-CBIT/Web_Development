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
<button id="toggle">Hide||Show</button>


<script type="text/javascript">
	
	$(document).ready(function()
	{
      $("#toggle").click(function()
      {
         $("p").toggle(2000);
      });
      
	});
</script>

</body>
</html>
