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
            TaxYieldLastUpdated = DateTime.Now,
            TaxBracket = new double[] { 0.408, 0.388, 0.358, 0.278, 0.24, 0.22, 0.12, 0.10 }
        };


        [HttpGet("[action]")]
        public Quiz QuizInformation()
        {
            var results = new List<Result>
            {
                new Result{Name = "Result 1", Id= Guid.NewGuid()},
                new Result{Name = "Result 2", Id= Guid.NewGuid()},
                new Result{Name = "Result 3", Id= Guid.NewGuid()}
            };
            var questions = new List<Question>();
            questions.Add(new Question{Name  ="Question 1", Id= Guid.NewGuid()});
            questions.Add(new Question{Name  ="Question 2", Id= Guid.NewGuid()});
            questions.Add(new Question{Name  ="Question 3", Id= Guid.NewGuid()});
            questions.Add(new Question{Name  ="Question 4", Id= Guid.NewGuid()});

            //Q1
            questions[0].Answers.Add(new Answer{Name = "Answer A", Id= Guid.NewGuid()});
            questions[0].Answers[0].WeightedScore.AddRange(new []{0.75, 0.5, 0.25});
            questions[0].Answers.Add(new Answer{Name = "Answer B", Id= Guid.NewGuid()});
            questions[0].Answers[1].WeightedScore.AddRange(new []{0.5, 0.25, 0.75});
            questions[0].Answers.Add(new Answer{Name = "Answer C", Id= Guid.NewGuid()});
            questions[0].Answers[2].WeightedScore.AddRange(new []{.25, 0.75, 0.5});
            questions[0].Answers.Add(new Answer{Name = "Answer D", Id= Guid.NewGuid()});
            questions[0].Answers[3].WeightedScore.AddRange(new []{.25, 0.5, 0.51});


            //Q2
            questions[1].Answers.Add(new Answer{Name = "Answer E", Id= Guid.NewGuid()});
            questions[1].Answers[0].WeightedScore.AddRange(new []{0.75, 0.5, 0.25});
            questions[1].Answers.Add(new Answer{Name = "Answer F", Id= Guid.NewGuid()});
            questions[1].Answers[1].WeightedScore.AddRange(new []{0.5, 0.25, 0.75});
            questions[1].Answers.Add(new Answer{Name = "Answer G", Id= Guid.NewGuid()});
            questions[1].Answers[2].WeightedScore.AddRange(new []{.25, 0.75, 0.5});
            questions[1].Answers.Add(new Answer{Name = "Answer H", Id= Guid.NewGuid()});
            questions[1].Answers[3].WeightedScore.AddRange(new []{.25, 0.5, 0.51});

            //Q3
            questions[2].Answers.Add(new Answer{Name = "Answer I", Id= Guid.NewGuid()});
            questions[2].Answers[0].WeightedScore.AddRange(new []{0.75, 0.5, 0.25});
            questions[2].Answers.Add(new Answer{Name = "Answer J", Id= Guid.NewGuid()});
            questions[2].Answers[1].WeightedScore.AddRange(new []{0.5, 0.25, 0.75});
            questions[2].Answers.Add(new Answer{Name = "Answer K", Id= Guid.NewGuid()});
            questions[2].Answers[2].WeightedScore.AddRange(new []{.25, 0.75, 0.5});
            questions[2].Answers.Add(new Answer{Name = "Answer L", Id= Guid.NewGuid()});
            questions[2].Answers[3].WeightedScore.AddRange(new []{.25, 0.5, 0.51});

            //Q4
            questions[3].Answers.Add(new Answer{Name = "Answer M", Id= Guid.NewGuid()});
            questions[3].Answers[0].WeightedScore.AddRange(new []{0.75, 0.5, 0.25});
            questions[3].Answers.Add(new Answer{Name = "Answer N", Id= Guid.NewGuid()});
            questions[3].Answers[1].WeightedScore.AddRange(new []{0.5, 0.25, 0.75});
            questions[3].Answers.Add(new Answer{Name = "Answer O", Id= Guid.NewGuid()});
            questions[3].Answers[2].WeightedScore.AddRange(new []{.25, 0.75, 0.5});
            questions[3].Answers.Add(new Answer{Name = "Answer P", Id= Guid.NewGuid()});
            questions[3].Answers[3].WeightedScore.AddRange(new []{.25, 0.5, 0.51});


            return new Quiz
            {
                Results = results,
                Questions = questions
            };
        }
    }
}
