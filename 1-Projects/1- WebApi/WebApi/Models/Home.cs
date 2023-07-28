namespace WebApi.Models
{
    public class Home
    {

        public int HomeId { get; set; }

        public string HomeTitle { get; set; } = null!;

        public string HomePriority { get; set; }

        public DateTime HomeCreatedDate { get; set; } 

    }
}
