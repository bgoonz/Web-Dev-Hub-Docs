# Pytorch

**Production Ready**

Transition seamlessly between eager and graph modes with TorchScript, and accelerate the path to production with TorchServe.

**Distributed Training**

Scalable distributed training and performance optimization in research and production is enabled by the torch.distributed backend.

**Robust Ecosystem**

A rich ecosystem of tools and libraries extends PyTorch and supports development in computer vision, NLP and more.

**Cloud Support**

PyTorch is well supported on major cloud platforms, providing frictionless development and easy scaling.

Explore a rich ecosystem of libraries, tools, and more to support development.

### Community

Join the PyTorch developer community to contribute, learn, and get your questions answered.



#### Learn the Basics

Familiarize yourself with PyTorch concepts and modules. Learn how to load data, build deep neural networks, train and save your models in this quickstart guide.

[Get started with PyTorch](https://pytorch.org/tutorials/beginner/basics/intro.html)

#### PyTorch Recipes

Bite-size, ready-to-deploy PyTorch code examples.

[Explore Recipes](https://pytorch.org/tutorials/recipes/recipes\_index.html)

#### Examples of PyTorch

A set of examples around pytorch in Vision, Text, Reinforcement Learning, etc.

[Checkout Examples](https://github.com/pytorch/examples)

#### PyTorch Cheat Sheet

Quick overview to essential PyTorch elements.

[Open](https://pytorch.org/tutorials/beginner/ptcheat.html)

#### Tutorials on GitHub

Access PyTorch Tutorials from GitHub.

[Go To GitHub](https://github.com/pytorch/tutorials)

#### Run Tutorials on Google Colab

Learn how to copy tutorial data into Google Drive so that you can run tutorials on Google Colab.

[Open](https://pytorch.org/tutorials/beginner/colab.html)



We’ve added a new feature to tutorials that allows users to open the notebook associated with a tutorial in Google Colab. You may need to copy data to your Google drive account to get the more complex tutorials to work.

In this example, we’ll demonstrate how to change the notebook in Colab to work with the Chatbot Tutorial. To do this, you’ll first need to be logged into Google Drive. (For a full description of how to access data in Colab, you can view their example notebook [here](https://colab.research.google.com/notebooks/io.ipynb#scrollTo=XDg9OBaYqRMd).)

To get started open the [Chatbot Tutorial](https://pytorch.org/tutorials/beginner/chatbot\_tutorial.html) in your browser.

At the top of the page click **Run in Google Colab**.

The file will open in Colab.

If you select **Runtime**, and then **Run All**, you’ll get an error as the file can’t be found.

To fix this, we’ll copy the required file into our Google Drive account.

1. Log into Google Drive.
2. In Google Drive, make a folder named **data**, with a subfolder named **cornell**.
3. Visit the Cornell Movie Dialogs Corpus and download the ZIP file.
4. Unzip the file on your local machine.
5. Copy the files **movie\_lines.txt** and **movie\_conversations.txt** to the **data/cornell** folder that you created in Google Drive.

Now we’ll need to edit the file in\_ \_Colab to point to the file on Google Drive.

In Colab, add the following to top of the code section over the line that begins _corpus\_name_:

from google.colab import drive drive.mount('/content/gdrive')

Change the two lines that follow:

1. Change the **corpus\_name** value to **“cornell”**.
2. Change the line that begins with **corpus** to this:

corpus = os.path.join("/content/gdrive/My Drive/data", corpus\_name)

We’re now pointing to the file we uploaded to Drive.

Now when you click the **Run cell** button for the code section, you’ll be prompted to authorize Google Drive and you’ll get an authorization code. Paste the code into the prompt in Colab and you should be set.

Rerun the notebook from the **Runtime** / **Run All** menu command and you’ll see it process. (Note that this tutorial takes a long time to run.)

Hopefully this example will give you a good starting point for running some of the more complex tutorials in Colab. As we evolve our use of Colab on the PyTorch tutorials site, we’ll look at ways to make this easier for users.
