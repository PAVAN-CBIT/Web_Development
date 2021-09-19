<html>  
  
<head>

<title>NEW</title>
<style>
#drop
{
 width: 400px;
height: 400px;
float: right;
background-color: indigo;


}

</style>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"</script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui-min.js"
         integrity="sha256-VazP97ZCwtekAsvgPBSUwpFkdrwD3unUfSGVYrahUqU="
         crossorigin="anonymous"></script>
         <link rel="stylesheet" href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css">



</head> 

<body>

<h1>jQuery</h1>
<img id="img" src="messi.jpg">
<script>

    $(function() 
    {
        $("img").draggable();
        $("drop").droppable();
    });
    
    
      </script>
      <div id="drop">
        <p>home</p>
        </div>



          
</body>



        

</html>
