using System;
using System.Web.Optimization;

namespace GGMvcWebProjects.Common
{
    /// <summary>
    /// 2016-03-20 添加对dotless的支持的帮助类
    /// </summary>
    public class LessTransform: IBundleTransform
    {
        public void Process(BundleContext context, BundleResponse response)
        {
            response.Content = dotless.Core.Less.Parse(response.Content);
            response.ContentType = "text/css";
        }
    }
}