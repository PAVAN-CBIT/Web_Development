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
          background-color: green;

		}
	</style>
</head>
<body>
	<center>
	<button id="kp">F A D E o u t</button>
	<button id="pk">F A D E i n</button>
<p>Welcome Back....!.jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.[3] It is free, open-source software using the permissive MIT License.[4] As of May 2019, jQuery is used by 73% of the 10 million most popular websites.[5] Web analysis indicates that it is the most widely deployed JavaScript library by a large margin, having at least 3 to 4 times more usage than any other JavaScript library.[5][6]</p>
</center>
<script type="text/javascript">
	$(document).ready(function()
	{

      $("#kp").click(function()
      {
        $("p").fadeOut(2000);
      });
      $("#pk").click(function()
      {
        $("p").fadeIn(2000);
      });

	});
</script>
</body>
</html>
