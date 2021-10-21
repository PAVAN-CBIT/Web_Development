<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>F A D D I N G</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
		
	</script>
	<style type="text/css">
		body
		{
          background-color:whitesmoke;

		}
	</style>
</head>
<body>
	<center>
	<button id="kp">F A D E -T O</button>
	
<p id="A">S A C H I N</p>
<p id="B">R A I N A</p>
<p id="C">PIETERSEN</p>
<p id="D">K O H L I</p>
<p id="E">A B D</p>


</center>
<script type="text/javascript">
	$(document).ready(function()
	{

      $("#kp").click(function()
      {
        $("#A").fadeTo(2000,0.75);
         $("#B").fadeTo(2000,0.60);
          $("#C").fadeTo(2000,0.50);
           $("#D").fadeTo(2000,0.30);
            $("#E").fadeTo(2000,0.25);
      });
      

	});
</script>
</body>
</html>
