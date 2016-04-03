using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GGMvcWebProjects.Controllers
{
    public class ExampleController : Controller
    {
        // GET: Example
        public ActionResult Index()
        {
            return this.View();
        }
        
        public ActionResult H5App()
        {
            return this.View();
        }
    }
}