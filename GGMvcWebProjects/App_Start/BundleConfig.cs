using GGMvcWebProjects.Common;
using System.Web;
using System.Web.Optimization;

namespace GGMvcWebProjects
{
    public class BundleConfig
    {
        // 有关绑定的详细信息，请访问 http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // 使用要用于开发和学习的 Modernizr 的开发版本。然后，当你做好
            // 生产准备时，请使用 http://modernizr.com 上的生成工具来仅选择所需的测试。
            BundleTable.EnableOptimizations = false; // debug下看到压缩文件

            #region Common

            bundles.Add(new StyleBundle("~/Css/Common/Common").Include(
                "~/Utils/bootstrap/css/bootstrap.css",
                "~/Utils/bootstrap/css/bootstrap-theme.css",
                "~/Css/Common/GGBootstrap.css",
                "~/Css/Common/GGCommon.css"));

            bundles.Add(new ScriptBundle("~/Js/Common/Common").Include(
                "~/Utils/jquery/jquery-1.11.1.js",
                "~/Utils/jquery.qrcode/jquery.qrcode-0.12.0.js",
                "~/Utils/bootstrap/js/bootstrap.js",
                "~/Utils/angular/angular.js",
                "~/Js/Common/GGConfig.js",
                "~/Js/Common/GGModule.js",
                "~/Js/Common/GGCommon.js"));

            bundles.Add(new ScriptBundle("~/Js/Common/Data").Include(
                "~/Js/Common/GGFangData.js"));

            #endregion

            #region Home

            #endregion

            #region Example

            bundles.Add(new StyleBundle("~/Css/Example/Common").Include(
               "~/Css/Example/CssExample.css"));
            bundles.Add(new ScriptBundle("~/Js/Example/Common").Include(
                "~/Js/Example/JsExample.js"));

            bundles.Add(new StyleBundle("~/Css/Example/Index").Include(
                "~/Css/Example/Index.css"));
            bundles.Add(new ScriptBundle("~/Js/Example/Index").Include(
                "~/Js/Example/Index.js"));

            bundles.Add(new StyleBundle("~/Css/Example/H5App").Include(
                "~/Css/Example/H5App.css"));
            bundles.Add(new ScriptBundle("~/Js/Example/H5App").Include(
                "~/Js/Example/H5App.js"));

            #endregion

            #region FangWap

            bundles.Add(new StyleBundle("~/Css/Common/FangWap").Include(
                "~/Css/FangWap/CssFangWap.css"));

            bundles.Add(new ScriptBundle("~/Js/Common/FangWeb").Include(
                "~/Js/FangWap/JsFangWap.js"));

            #endregion

            #region FangWeb

            bundles.Add(new StyleBundle("~/Css/FangWeb/Common").Include(
                "~/Css/FangWeb/CssFangWeb.css"));
            bundles.Add(new ScriptBundle("~/Js/FangWeb/Common").Include(
                "~/Js/FangWeb/JsFangWeb.js"));

            bundles.Add(new StyleBundle("~/Css/FangWeb/Index").Include(
                "~/Css/FangWeb/Index.css"));
            bundles.Add(new ScriptBundle("~/Js/FangWeb/Index").Include(
                "~/Js/FangWeb/Index.js"));

            bundles.Add(new StyleBundle("~/Css/FangWeb/Abount").Include(
                "~/Css/FangWeb/Abount.css"));
            bundles.Add(new ScriptBundle("~/Js/FangWeb/Abount").Include(
                "~/Js/FangWeb/Abount.js"));

            bundles.Add(new StyleBundle("~/Css/FangWeb/Experience").Include(
               "~/Css/FangWeb/Experience.css"));
            bundles.Add(new ScriptBundle("~/Js/FangWeb/Experience").Include(
                "~/Js/FangWeb/Experience.js"));

            bundles.Add(new StyleBundle("~/Css/FangWeb/Career").Include(
               "~/Css/FangWeb/Career.css"));
            bundles.Add(new ScriptBundle("~/Js/FangWeb/Career").Include(
                "~/Js/FangWeb/Career.js"));

            bundles.Add(new StyleBundle("~/Css/FangWeb/Works").Include(
               "~/Css/FangWeb/Works.css"));
            bundles.Add(new ScriptBundle("~/Js/FangWeb/Works").Include(
                "~/Js/FangWeb/Works.js"));

            bundles.Add(new StyleBundle("~/Css/FangWeb/Motto").Include(
               "~/Css/FangWeb/Motto.css"));
            bundles.Add(new ScriptBundle("~/Js/FangWeb/Motto").Include(
                "~/Js/FangWeb/Motto.js"));

            #endregion
        }

        /// <summary>
        /// 将less转换为css样式
        /// 用法：AddLessToBundle(bundles, new Bundle("~/Css/Common/Common").Include("~/Utils/bootstrap/css/bootstrap.less"));
        /// </summary>
        private static void AddLessToBundle(BundleCollection bundles, Bundle less)
        {
            less.Transforms.Add(new LessTransform());
            less.Transforms.Add(new CssMinify());
            bundles.Add(less);
        }
    }
}
