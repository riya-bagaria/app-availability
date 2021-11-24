import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AppAvailability = /** @class */ (function (_super) {
    __extends(AppAvailability, _super);
    function AppAvailability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppAvailability.prototype.check = function (app) { return cordova(this, "check", {}, arguments); };
    AppAvailability.prototype.openUrl = function (app) { return cordova(this, "openUrl", {}, arguments); };
    AppAvailability.pluginName = "AppAvailability";
    AppAvailability.plugin = "cordova-plugin-appavailability";
    AppAvailability.pluginRef = "appAvailability";
    AppAvailability.repo = "https://github.com/riya-bagaria/AppAvailability.git";
    AppAvailability.platforms = ["Android", "iOS"];
    AppAvailability.decorators = [
        { type: Injectable }
    ];
    return AppAvailability;
}(IonicNativePlugin));
export { AppAvailability };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC1hdmFpbGFiaWxpdHkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBeUNuQyxtQ0FBaUI7Ozs7SUFPcEQsK0JBQUssYUFBQyxHQUFXOzs7Ozs7O2dCQVJsQixVQUFVOzswQkF6Q1g7RUEwQ3FDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQXBwIEF2YWlsYWJpbGl0eVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIGNoZWNrIGlmIGFuIGFwcCBpcyBpbnN0YWxsZWQgb24gdGhlIHVzZXIncyBkZXZpY2UuIEl0IHJlcXVpcmVzIGFuIFVSSSBTY2hlbWUgKGUuZy4gdHdpdHRlcjovLykgb24gaU9TIG9yIGEgUGFja2FnZSBOYW1lIChlLmcgY29tLnR3aXR0ZXIuYW5kcm9pZCkgb24gQW5kcm9pZC5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYXBwYXZhaWxhYmlsaXR5LiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQXBwQXZhaWxhYmlsaXR5IHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vb2hoMmFoaC9BcHBBdmFpbGFiaWxpdHkpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwQXZhaWxhYmlsaXR5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtYXZhaWxhYmlsaXR5L25neCc7XG4gKiBpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwQXZhaWxhYmlsaXR5OiBBcHBBdmFpbGFiaWxpdHksIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBsZXQgYXBwO1xuICpcbiAqIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSkge1xuICogICBhcHAgPSAndHdpdHRlcjovLyc7XG4gKiB9IGVsc2UgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2FuZHJvaWQnKSkge1xuICogICBhcHAgPSAnY29tLnR3aXR0ZXIuYW5kcm9pZCc7XG4gKiB9XG4gKlxuICogdGhpcy5hcHBBdmFpbGFiaWxpdHkuY2hlY2soYXBwKVxuICogICAudGhlbihcbiAqICAgICAoeWVzOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhhcHAgKyAnIGlzIGF2YWlsYWJsZScpLFxuICogICAgIChubzogYm9vbGVhbikgPT4gY29uc29sZS5sb2coYXBwICsgJyBpcyBOT1QgYXZhaWxhYmxlJylcbiAqICAgKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcEF2YWlsYWJpbGl0eScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcGF2YWlsYWJpbGl0eScsXG4gIHBsdWdpblJlZjogJ2FwcEF2YWlsYWJpbGl0eScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vb2hoMmFoaC9BcHBBdmFpbGFiaWxpdHknLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwQXZhaWxhYmlsaXR5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2tzIGlmIGFuIGFwcCBpcyBhdmFpbGFibGUgb24gZGV2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcHAgUGFja2FnZSBuYW1lIG9uIGFuZHJvaWQsIG9yIFVSSSBzY2hlbWUgb24gaU9TXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjaGVjayhhcHA6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19