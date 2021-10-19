<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>D O M</title>
</head>
<body>
	<script type="text/javascript">
		function Print()
		{
           var No= document.form.name.value;
         alert("Name is"+"   "+No);
		}

		
	</script>
	<form name="form">
		Enter Name:<input type="text" name="name">
		<br>
		<input type="button" value="N A M E" onclick="Print()">
	</form>

</body>
</html>
