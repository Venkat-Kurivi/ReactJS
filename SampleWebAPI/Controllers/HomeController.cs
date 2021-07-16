using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SampleWebAPI.Models;
using System.Threading.Tasks;

namespace SampleWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpPost("Login")]
       public async Task<IActionResult> Login()
        {
            System.IO.StreamReader reader = new System.IO.StreamReader(Request.Body);
            string data = await reader.ReadToEndAsync();
            if (!string.IsNullOrEmpty(data))
            {
                User user = JsonConvert.DeserializeObject<User>(data);
                if (user.Email == "venkateswarluk123@gmail.com" && user.Password == "test@123")
                {
                    user.Status = "User Logged In successfully";
                    return Ok(user);
                }
                else
                {
                    user.Status = "Invalid User.";
                    return StatusCode(500, user);
                }
            }
            
            return StatusCode(500, data);
        }
    }
}
