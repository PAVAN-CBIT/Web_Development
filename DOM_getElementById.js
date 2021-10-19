<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>D O M</title>
</head>
<body>
	<script type="text/javascript">
		function getCube()
		{
           var No= document.getElementById("Num").value;
         alert("Cube is"+"   "+No*No*No);
		}

		
	</script>
	<form>
		Enter Number:<input type="text" id="Num">
		<br>
		<input type="button" value="CUBE" onclick="getCube()">
	</form>

</body>
</html>
