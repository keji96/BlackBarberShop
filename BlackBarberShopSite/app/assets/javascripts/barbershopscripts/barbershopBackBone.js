function getBarbers(){
console.log("clicked")

    // Model
    var Barber = Backbone.Model.extend({

    });

    // Collection
    var BarberCollection = Backbone.Collection.extend({
      model: Barber,
      url:'/api/barbershops'
    });

    // Model View
    var BarberView = Backbone.View.extend({
      initialize: function(){
        this.listenTo(this.model, 'change', this.render);
      },
      tagName: 'div',
      className: 'person',
      template: _.template( $('#barbershoptempplate').html() ),
      render: function(){
        this.$el.empty();
        var html = this.template(  this.model.toJSON() );
        var $html = $(html);
        this.$el.append( $html );
      }
    });

    // List View
    var BarberListView = Backbone.View.extend({
      initialize: function(){
        this.listenTo(this.collection, 'add', this.render);
      },
      render: function(){
        this.$el.empty();
        var $view;
        var $currentlatlong = $('#currentlatlng')
        var test = $currentlatlong.data()

        var barberObject;
        var barbersObjects = this.collection.models;;
        for (var i = 0; i < barbersObjects.length; i++) {
          barberObject = barbersObjects[i];
          $view = new BarberView({model: barberObject});
               //console.log(barberObject)
          $view.render();
          this.$el.append($view.$el);
        }
      }
    });

    var barber = new BarberCollection();
    var barbersPainter = new BarberListView({
      collection: barber,
      el: $('#barbers-list')
    });

    barber.fetch(({data: {search: $('#search').val()}}));


}
