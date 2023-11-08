using AspNetMvcDemo2.Models;
using Microsoft.AspNetCore.Mvc;

namespace AspNetMvcDemo2.Controllers
{
    public class PersonsController : Controller
    {
        public IActionResult Index()
        {
            // create a new empty list of PersonModel objects
            var persons = new List<PersonModel>();

            // read a CSV file from disk and fill the persons list with the data from the CSV file
            using (var reader = new StreamReader(System.IO.File.OpenRead(@"Persons.csv")))
            {
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();

                    // if this is the first line, skip it
                    if (line.StartsWith("PersonName,YearOfBirth,CountryOfOrigin"))
                    {
                        continue;
                    }

                    var values = line.Split(',');

                    var person = new PersonModel
                    {
                        PersonName = values[0],
                        YearOfBirth = values[1],
                        Country = values[2]
                    };

                    persons.Add(person);
                }
            }

            return View(persons);
        }
    }
}
