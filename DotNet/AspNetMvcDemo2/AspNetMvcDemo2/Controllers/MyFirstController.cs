using Microsoft.AspNetCore.Mvc;

namespace AspNetMvcDemo2.Controllers
{
    public class MyFirstController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Hello()
        {
            return View();
        }
    }
}
