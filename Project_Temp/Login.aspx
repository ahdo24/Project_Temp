<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <link href="css/lib/root.css" rel="stylesheet" />


    <%-- custom css --%>
    <link href="css/Login.css" rel="stylesheet" />

    <link href="css/lib/_Ahdo.css" rel="stylesheet" />


</head>
<body>
    
    <form id="form1" runat="server">

        <div class="main_wrapper" data-theme="dr">
            <div class="modal draggable ui-widget-content">
                <div class="logo_con" >
                    <img src="#" />
                </div>

                <div class="inputs_con">
                    <div class="title">Payroll <span>Sytem</span></div>
                    <span> <input type="text" 
                                  data-validation="required" 
                                  data-input="Username"
                                  placeholder="USERNAME" 
                                  autofocus="autofocus" /> 
                    </span>
                    <span> <input type="password" 
                                  data-validation="required" 
                                  data-input="Password"
                                  placeholder="PASSWORD"/> 
                    </span>
                    <span> <input type="button" value="LOGIN" onclick="login()"/> </span>
                    <div class="company"><span>Client</span> Company</div>
                </div>

            </div>

        </div>

    </form>


    <script type="text/javascript" src="js/lib/jquery-3.7.1.min.js"></script>
    <script type="text/javascript" src="js/lib/sweet-alert2.js"></script>
    <script type="text/javascript" src="js/lib/jquery-ui.min.js"></script>


    <script type="text/javascript" src="js/lib/_Ahdo.js"></script>

    <%-- custom js --%>
    <script type="text/javascript" src="js/Login.js"></script>



</body>
</html>
