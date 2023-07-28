using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using WebApi.Models;
using System.Text.Json;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public HomeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("GET")]
        public JsonResult Get()
        {
            string query = @"
                    select HomeId, HomeTitle, HomePriority, HomeCreatedDate from dbo.Home";
            
            string sqlDataSource = _configuration.GetConnectionString("AppCon");

            List<string> aList = new List<string>();

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    using (SqlDataReader myReader = myCommand.ExecuteReader())
                    {
                        
                        while (myReader.Read())
                        {
                            var obj1 = myReader["HomeId"];
                            var obj2 = myReader["HomeTitle"];
                            var obj3 = myReader["HomePriority"];
                            var obj4 = myReader["HomeCreatedDate"];

                            aList.Add(obj1.ToString());
                            aList.Add((string)obj2);
                            aList.Add((string)obj3);
                            aList.Add(obj4.ToString());


                        }
                    }
                    myCon.Close();
                }
            }
            var json = JsonSerializer.Serialize(aList);
            return new JsonResult(json);
        }


        [HttpPost]
        public JsonResult Post(Home dep)
        {
            string query = @"
                    
                    insert into dbo.Home(HomeId,HomeTitle,HomePriority,HomeCreatedDate) values
                    ('" + dep.HomeId + "','" + dep.HomeTitle + "','" + dep.HomePriority + "','" + dep.HomeCreatedDate +"')";
                    

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(Home dep)
        {
            string query = @"
                    update dbo.Home set 
                    HomeTitle = '" + dep.HomeTitle + "' where HomeId= '" + dep.HomeId + "'";
                    
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.Home
                    where HomeId = " + id + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

        

    }


}
