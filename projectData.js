
 code = [` import cube.LayerColor;
 import javafx.application.Application;
 import javafx.fxml.FXMLLoader;
 import javafx.scene.Scene;
 import javafx.stage.Stage;
 import org.opencv.core.Core;
 
 public class main extends Application {
 
     static{ System.loadLibrary(Core.NATIVE_LIBRARY_NAME); }
 
     @Override

     public void start(Stage primaryStage) throws Exception {
         //Loader
         FXMLLoader loader = new FXMLLoader(main.class.getResource("FXML_layouts\\MainScreen.fxml"));
 
         Scene scene = new Scene(loader.load());
         ((mainController)loader.getController()).setStage(primaryStage);
 
         primaryStage.setScene(scene);
         primaryStage.show();
     }
 
     public static void main(String[] args) {
         launch(args);
     }
 } 
`,"hellow",'One more']


projectData = '[{"projectName" : "Rubiks", "projectDescription" : "Cool rubiks cube project", "mediaAddress":"res/smile.jpg", "githubLink":"www.github.com"},' +
     '{"projectName" : "Bezier", "projectDescription" : "Bezier curve project", "mediaAddress":"res/smile.jpg", "githubLink":"www.github.com"},'+
     '{"projectName" : "Neural Net", "projectDescription" : "Neural net written from scratch", "mediaAddress":"res/smile.jpg", "githubLink":"www.github.com"}]';