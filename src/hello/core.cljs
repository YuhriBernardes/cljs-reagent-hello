(ns hello.core
  (:require [reagent.dom :as dom]
            [reagent.core :as r]))

(def cnt (r/atom 0))

(defn- index []
  [:<>
   [:div {:className "text"} "Counter: " @cnt]
   [:button {:on-click #(swap! cnt inc)} "CLICK ME"]])

(defn main []
  (dom/render [index]
              (. js/document querySelector "#app")))

(defn ^:dev/after-load force-reload []
  (print "Force Reloading \\o")
  (main))
