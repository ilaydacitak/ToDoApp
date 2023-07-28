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
    public class DetailController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public DetailController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("GET")]
        public JsonResult Get()
        {
            string query = @"
                    select Details,HomeId from dbo.Detail";

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
                            var obj2 = myReader["Details"];


                            aList.Add(obj1.ToString());
                            aList.Add((string)obj2);




                        }
                    }
                    myCon.Close();
                }
            }
            var json = JsonSerializer.Serialize(aList);
            return new JsonResult(json);
        }


        [HttpPost]
        public JsonResult Post(Detail dep)
        {
            string query = @"
                    
                    insert into dbo.Detail(Details) values
                    ('" + dep.Details +"')";


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
        public JsonResult Put(Detail dep)
        {
            string query = @"
                    update dbo.Detail set 
                    Details = '" + dep.Details + "' where HomeId= '" + dep.HomeId + "'";

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
                    delete from dbo.Detail
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

        [HttpGet]
        public JsonResult GetAllHomeId()
        {
            string query = @"
                    select HomeId from dbo.Detail";

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
                            


                            aList.Add(obj1.ToString());
                            




                        }
                    }
                    myCon.Close();
                }
            }
            var json = JsonSerializer.Serialize(aList);
            return new JsonResult(json);
        }



    }
}


