using System.Collections.Generic;

namespace ASPNETReact.Models
{
    public class TaxInfo
    {
        public double TaxYield {get;set;}

        public IEnumerable<double> TaxBracket {get;set;}
    }
}