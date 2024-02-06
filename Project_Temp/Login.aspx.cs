using System;
using System.Web.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


public partial class Login : System.Web.UI.Page
{

    protected void Page_Load(object sender, EventArgs e)
    {

    }



    [WebMethod]
    public static string getData(dynamic obj)
    {
        dynamic data = JObject.Parse(JsonConvert.SerializeObject(obj));

        string result = "success";

        return result;
    }






}