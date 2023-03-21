<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Onclick</title>
</head>
<style type="text/css">
	#box
	{
		width: 100px;
		height: 100px;
		background-color: lightblue;
		margin: auto;
	}


	#kumar
	{
		width: 100px;
		height: 100px;
		background-color: lightblue;
		margin: auto;
	}

</style>
<body>
	<div id="box" onclick="sai()">
	</div>
	<center><h1>On clicking incremented by<span id="hari"></span>Times</h1></center>

	<div id="kumar" onmouseout="rajesh()"></div>
	
	<script type="text/javascript">
		var count=0;
		function sai(){
			count=count+1;
			document.getElementById('hari').innerHTML=count;

		}

		function rajesh()
		{
			console.log("on mosuse out");

		}

		
	</script>

</body>
</html>
