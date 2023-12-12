using Azure.Storage.Blobs;
using AzureBlobStorageDemo;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

string connectionString = "DefaultEndpointsProtocol=https;AccountName=codeacademy2023;AccountKey=gJZJv3NZLAkMyX6P41JOhh7EEj+zML9PhimAruDdipcGD00ddmNEkvvmYNEAre2ZJ2gHKiDb4LMc+AStioOC0g==;EndpointSuffix=core.windows.net";
string containerName = "jani";

Console.WriteLine("Starting to access Azure blob storage...");
BlobContainerClient container = new(connectionString, containerName);
//container.Create();
//Console.WriteLine("Blob container created!");

/*
string dataToSave = "Hello World!";
byte[] dataBytes = Encoding.UTF8.GetBytes(dataToSave);
MemoryStream stream = new(dataBytes);

Console.WriteLine("Starting to upload blob data...");
BlobClient client = container.GetBlobClient("hello.txt");
client.Upload(stream);
Console.WriteLine("Data uploaded successfully!");
*/

Customer cust = new()
{
    Id = 12345,
    Name = "John Doe",
    Country = "USA"
};

string dataToSave = JsonSerializer.Serialize(cust);
Console.WriteLine(dataToSave);
byte[] dataBytes = Encoding.UTF8.GetBytes(dataToSave);
MemoryStream stream = new(dataBytes);

Console.WriteLine("Starting to upload blob data...");
BlobClient client = container.GetBlobClient("customer.json");
client.Upload(stream);
Console.WriteLine("Data uploaded successfully!");
