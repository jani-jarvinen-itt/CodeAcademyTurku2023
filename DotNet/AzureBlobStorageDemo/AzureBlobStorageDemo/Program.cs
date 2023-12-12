using Azure.Storage.Blobs;

string connectionString = "DefaultEndpointsProtocol=https;AccountName=codeacademy2023;AccountKey=gJZJv3NZLAkMyX6P41JOhh7EEj+zML9PhimAruDdipcGD00ddmNEkvvmYNEAre2ZJ2gHKiDb4LMc+AStioOC0g==;EndpointSuffix=core.windows.net";
string containerName = "jani";

Console.WriteLine("Starting to access Azure blob storage...");
BlobContainerClient container = new(connectionString, containerName);
container.Create();
Console.WriteLine("Blob container created!");
