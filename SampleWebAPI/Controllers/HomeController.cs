﻿using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SampleWebAPI.Models;
using System.IO;
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

        [HttpGet("GetClaimList/{email}")]
        public async Task<IActionResult> GetClaimList(string email)
        {
            string filePath = GetFilePath("ClaimDetails.json");
            string json = await GetjsonFromFile(filePath);
            return Ok(json);
        }

        [HttpGet("GetClaimDetails/{id}")]
        public async Task<IActionResult> GetClaimDetails(string id)
        {
            string filePath = GetFilePath("ClaimDetails.json");
            string json = await GetjsonFromFile(filePath);
            JArray claimsArray = (JArray)JsonConvert.DeserializeObject(json);
            return Ok(claimsArray[0].ToString());
        }

        private string GetFilePath(string fileName)
        {
            return Path.Combine(@"D:\Projects\ReactJs\SampleWebAPI\Data", fileName);
        }

        private async Task<string> GetjsonFromFile(string filePath)
        {
            if (System.IO.File.Exists(filePath))
            {
                using (StreamReader r = new StreamReader(filePath))
                {
                    string json = await r.ReadToEndAsync();
                    return json;
                }
            }

            return "";
        }

    }
}
