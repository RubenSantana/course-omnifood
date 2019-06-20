import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyNav {
  constructor() {
    this.siteNav = $("nav");
    this.navTriggerElement = $(".features-section--js");
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    const that = this;
    new Waypoint({
      element: this.navTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteNav.addClass("sticky");
        } else {
          that.siteNav.removeClass("sticky");
        }
      },
      offset: "60px;"
    });
  }
}

export default StickyNav;
