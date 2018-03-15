using System;
using System.Collections.Generic;

namespace ASPNETReact.Models
{
    public class Quiz
    {
        public List<Result> Results {get;set;}
        public List<Question> Questions {get;set;}

        public Quiz()
        {
            Results = new List<Result>();
            Questions = new List<Question>();
        }
    }

    public class Question 
    {
        public Guid Id {get;set;}
        public string Name {get;set;}
        public List<Answer> Answers {get;set;}

        public Question() 
        {
            Answers = new List<Answer>();
        }
    }

    public class Answer 
    {
        public Guid Id {get;set;}
        public string Name {get;set;}
        public List<double> WeightedScore {get;set;}

        public Answer() 
        {
            WeightedScore = new List<double>();
        }
    }

    public class Result 
    {
        public Guid Id {get;set;}
        public string Name {get;set;}
    }
}