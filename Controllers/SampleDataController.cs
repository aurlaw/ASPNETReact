using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPNETReact.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASPNETReact.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts(int startDateIndex)
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index + startDateIndex).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        [HttpGet("[action]")]
        public TaxInfo TaxInformation() => new TaxInfo()
        {
            TaxYield = 6.04,
            TaxBracket = new double[] { 0.408, 0.388, 0.358, 0.278, 0.24, 0.22, 0.12, 0.10 }
        };
    }
}
